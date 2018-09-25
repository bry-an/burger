INSERT INTO burgers (burger_name, devoured) VALUES 
    ('Bean Burger', false), 
    ('Chickpea Burger', true), 
    ('Portobello Burger', true);
    
    USE burgers_db;
    SELECT * FROM burgers;
    UPDATE burgers SET devoured=0;
    DELETE FROM burgers WHERE id=4;
TRUNCATE TABLE burgers;