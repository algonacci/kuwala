from sqlalchemy import Column, String

from ..database import Base


class DataCatalogItem(Base):
    __tablename__ = "data_catalog_items"

    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    logo = Column(String)
