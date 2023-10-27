# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

[👉🏾👉🏾👉🏾 List each table in your diagram]

## Add the Entity Relationship Diagram
[👉🏾👉🏾👉🏾 Include an image or images of the diagram below. You may also wish to use the following markdown syntax to outline each table, as per your preference.]

| User| Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| githubid| integer| ..|
| username |varchar|  ... |
| avatarurl |varchar|  ... |
| accesstoken |varchar|  ... |

| courses | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| title | text | name of the shoe model |
| instructor|text |  ... |
| duration| text | ... |
| rating|text | ... |
| reviews| text |  ... |
| start_date| text |  ... |
| end_date| text |  ... |
| cost| money |  ... |

| challenge | Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| course_id| text | foreign key|
| challenge |varchar|  ... |

| track| Type | Description |
|-------------|------|-------------|
| id | integer | primary key |
| name| varchar | ..|
| description |varchar|  ... |

| course_user| Type | Description |
|-------------|------|-------------|
| courseid | integer | primary key, foreign key |
| user_id| integer |foreign key|

<img width="319" alt="image" src="https://github.com/Unaiza898/capstone-codepath/assets/65740643/34328740-ee30-46fa-99e5-af892ce93a72">
