import { Comment } from "src/comment/entities/comment.entity";
import { Topic } from "src/topic/entities/topic.entity";
import { User } from "src/user/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config: PostgresConnectionOptions = {

    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    entities: [User, Topic, Comment],
    synchronize: true
}

export default config;