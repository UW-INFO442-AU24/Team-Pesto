from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '6990ab6a0f2f'
down_revision = '13cd0fd149fd'
branch_labels = None
depends_on = None

def upgrade():
    # Add the timestamp column to the responses table
    op.add_column('responses', sa.Column('timestamp', sa.DateTime(), nullable=False, server_default=sa.func.now()))

def downgrade():
    # Drop the timestamp column from the responses table
    op.drop_column('responses', 'timestamp')