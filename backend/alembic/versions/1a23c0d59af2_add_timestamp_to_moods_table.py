"""Add timestamp to moods table

Revision ID: 1a23c0d59af2
Revises: 81bf17dd34c9
Create Date: 2024-12-02 19:11:43.464809

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import func


# revision identifiers, used by Alembic.
revision: str = '1a23c0d59af2'
down_revision: Union[str, None] = '81bf17dd34c9'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('moods', sa.Column('timestamp', sa.DateTime, server_default=func.now(), nullable=False))


def downgrade() -> None:
    op.drop_column('moods', 'timestamp')