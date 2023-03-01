# PlantCollection

Simple page showing pagination, ordering and filtering.

- Pagination: splits the data into pages, displaying only one page at a time.
- Ordering: is the other word for sorting the data (by the selected property).
- Filtering: displays only these records fitting certain filters (similar to the SQL “WHERE” statement).

(This is just the start of the page)
--> what I want to do more with this page is:

    * Implement more plants(I have a big collection)
    * Implement pictures of the plants as well as more info (like watering/how much sun they need/if the plant are toxic)
    * Also categorise more by species - anthuriums in one table and philodendrons in another.
    * Also have a wishlist section.


# Create a database in MySQL:

CREATE DATABASE Plants;

# Insert data into MySQL:

INSERT INTO plants (name, description, possess)
VALUES ('Philodendron Pink Princess', 'Dark geeen climbing plant with pink varigation', 1),
       ('Philodendron White Wizard', 'Green climbing plant with white varigation', 1),
       ('Anthurium Regal', 'Big green velvet foliage with several white veins', 1),
       ('Anthurium Palidiflorum', 'Dark green long foliage', 0),
       ('Scindapsus tricolour', 'Silver and green hanging plant', 0);


## Contributing

Me :butterfly: Yes me!
**Signed: Janne Marie Tvetene**
