"""alter tables related to self assessment again

Revision ID: 13cd0fd149fd
Revises: d7231b3e08a0
Create Date: 2024-11-26 14:12:02.682175

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '13cd0fd149fd'
down_revision: Union[str, None] = 'd7231b3e08a0'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    columns = [col['name'] for col in inspector.get_columns('responses')]
    
    if 'date' not in columns:
        op.add_column('responses', sa.Column('date', sa.DateTime(), nullable=False, server_default=sa.func.now()))
    if 'score' not in columns:
        op.add_column('responses', sa.Column('score', sa.Integer(), nullable=False, server_default='0'))
    
    op.alter_column('responses', 'score', server_default=None)
    op.alter_column('responses', 'date', server_default=None)
    op.create_foreign_key(None, 'responses', 'users', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'responses', type_='foreignkey')
    with op.batch_alter_table('responses') as batch_op:
        batch_op.drop_column('score')
        batch_op.drop_column('date')
    # ### end Alembic commands ###