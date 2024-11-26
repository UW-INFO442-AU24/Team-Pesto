"""Be able to delete all moods associated to user

Revision ID: 8c602c4b7fd8
Revises: d19e97404478
Create Date: 2024-11-12 13:09:11.726872

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = '8c602c4b7fd8'
down_revision: Union[str, None] = 'd19e97404478'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Drop existing foreign key constraints
    op.drop_constraint('moods_user_id_fkey', 'moods', type_='foreignkey')
    op.drop_constraint('self_assessments_user_id_fkey', 'self_assessments', type_='foreignkey')

    # Add new foreign key constraints with ON DELETE CASCADE
    op.create_foreign_key(
        'moods_user_id_fkey', 'moods', 'users', ['user_id'], ['id'], ondelete='CASCADE'
    )
    op.create_foreign_key(
        'self_assessments_user_id_fkey', 'self_assessments', 'users', ['user_id'], ['id'], ondelete='CASCADE'
    )


def downgrade() -> None:
    # Drop the new foreign key constraints
    op.drop_constraint('moods_user_id_fkey', 'moods', type_='foreignkey')
    op.drop_constraint('self_assessments_user_id_fkey', 'self_assessments', type_='foreignkey')

    # Add the old foreign key constraints back
    op.create_foreign_key(
        'moods_user_id_fkey', 'moods', 'users', ['user_id'], ['id']
    )
    op.create_foreign_key(
        'self_assessments_user_id_fkey', 'self_assessments', 'users', ['user_id'], ['id']
    )