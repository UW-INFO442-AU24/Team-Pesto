"""Initial migration

Revision ID: 81bf17dd34c9
Revises: 2c4e4b06857b
Create Date: 2024-12-02 19:01:04.091083

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy_utils import URLType, EmailType


# revision identifiers, used by Alembic.
revision: str = '81bf17dd34c9'
down_revision: Union[str, None] = '2c4e4b06857b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Check if the table exists before creating it
    if not op.get_bind().dialect.has_table(op.get_bind(), 'users'):
        op.create_table(
            'users',
            sa.Column('id', sa.Integer, primary_key=True, index=True),
            sa.Column('username', sa.String(50), unique=True, index=True, nullable=False),
            sa.Column('full_name', sa.String(255)),
            sa.Column('email', EmailType, unique=True, index=True, nullable=False),
            sa.Column('hashed_password', sa.String, nullable=False)
        )

    if not op.get_bind().dialect.has_table(op.get_bind(), 'moods'):
        op.create_table(
            'moods',
            sa.Column('id', sa.Integer, primary_key=True, index=True),
            sa.Column('user_id', sa.Integer, sa.ForeignKey('users.id'), nullable=False),
            sa.Column('mood', sa.Integer, nullable=False)
        )

    if not op.get_bind().dialect.has_table(op.get_bind(), 'resources'):
        op.create_table(
            'resources',
            sa.Column('id', sa.Integer, primary_key=True, index=True),
            sa.Column('title', sa.String, nullable=False),
            sa.Column('description', sa.String),
            sa.Column('url', URLType, nullable=False),
            sa.Column('resource_type', sa.String, nullable=False)
        )

    if not op.get_bind().dialect.has_table(op.get_bind(), 'responses'):
        op.create_table(
            'responses',
            sa.Column('id', sa.Integer, primary_key=True, index=True),
            sa.Column('user_id', sa.Integer, sa.ForeignKey('users.id'), nullable=False),
            sa.Column('score', sa.Integer, nullable=False),
            sa.Column('timestamp', sa.DateTime, default=sa.func.now())
        )


def downgrade() -> None:
    op.drop_table('responses')
    op.drop_table('resources')
    op.drop_table('moods')
    op.drop_table('users')