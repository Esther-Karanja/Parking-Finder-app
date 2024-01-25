"""Added parking spot table

Revision ID: 750f479a6d63
Revises: 5f8e8abdc57f
Create Date: 2024-01-23 17:09:00.929191

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '750f479a6d63'
down_revision = '5f8e8abdc57f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('parking spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('latitude', sa.Float(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=True),
    sa.Column('type', sa.String(), nullable=False),
    sa.Column('capacity', sa.String(), nullable=False),
    sa.Column('pricing', sa.String(), nullable=False),
    sa.Column('restrictions', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('parking spots')
    # ### end Alembic commands ###