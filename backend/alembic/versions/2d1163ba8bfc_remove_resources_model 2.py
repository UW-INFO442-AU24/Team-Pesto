"""Remove resources  model

Revision ID: 2d1163ba8bfc
Revises: ff8987111c5c
Create Date: 2024-11-14 14:27:15.555734

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2d1163ba8bfc'
down_revision: Union[str, None] = 'ff8987111c5c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Drop foreign key constraints
    op.drop_constraint('moods_user_id_fkey', 'moods', type_='foreignkey')
    op.drop_constraint('answers_question_id_fkey', 'answers', type_='foreignkey')
    op.drop_constraint('answers_response_id_fkey', 'answers', type_='foreignkey')
    op.drop_constraint('answer_responses_answer_id_fkey', 'answer_responses', type_='foreignkey')
    op.drop_constraint('answer_responses_response_id_fkey', 'answer_responses', type_='foreignkey')

    # Drop tables
    op.drop_table('answer_responses')
    op.drop_index('ix_answers_id', table_name='answers')
    op.drop_table('answers')
    op.drop_index('ix_questions_id', table_name='questions')
    op.drop_table('questions')
    op.drop_index('ix_responses_id', table_name='responses')
    op.drop_table('responses')
    op.drop_index('ix_users_email', table_name='users')
    op.drop_index('ix_users_id', table_name='users')
    op.drop_index('ix_users_username', table_name='users')
    op.drop_table('users')
    op.drop_index('ix_moods_id', table_name='moods')
    op.drop_table('moods')

def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('moods',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('mood', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='moods_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='moods_pkey')
    )
    op.create_index('ix_moods_id', 'moods', ['id'], unique=False)
    op.create_table('users',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('username', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('full_name', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('email', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
    sa.Column('hashed_password', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='users_pkey')
    )
    op.create_index('ix_users_username', 'users', ['username'], unique=True)
    op.create_index('ix_users_id', 'users', ['id'], unique=False)
    op.create_index('ix_users_email', 'users', ['email'], unique=True)
    op.create_table('responses',
    sa.Column('id', sa.INTEGER(), server_default=sa.text("nextval('responses_id_seq'::regclass)"), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='responses_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_index('ix_responses_id', 'responses', ['id'], unique=False)
    op.create_table('questions',
    sa.Column('id', sa.INTEGER(), server_default=sa.text("nextval('questions_id_seq'::regclass)"), autoincrement=True, nullable=False),
    sa.Column('text', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='questions_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_index('ix_questions_id', 'questions', ['id'], unique=False)
    op.create_table('answers',
    sa.Column('id', sa.INTEGER(), server_default=sa.text("nextval('answers_id_seq'::regclass)"), autoincrement=True, nullable=False),
    sa.Column('question_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('answer', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('response_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['question_id'], ['questions.id'], name='answers_question_id_fkey'),
    sa.ForeignKeyConstraint(['response_id'], ['responses.id'], name='answers_response_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='answers_pkey'),
    postgresql_ignore_search_path=False
    )
    op.create_index('ix_answers_id', 'answers', ['id'], unique=False)
    op.create_table('answer_responses',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('response_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('answer_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['answer_id'], ['answers.id'], name='answer_responses_answer_id_fkey'),
    sa.ForeignKeyConstraint(['response_id'], ['responses.id'], name='answer_responses_response_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='answer_responses_pkey')
    )
    # ### end Alembic commands ###
