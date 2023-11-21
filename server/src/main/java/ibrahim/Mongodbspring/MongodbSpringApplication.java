package ibrahim.Mongodbspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class MongodbSpringApplication {
    public static void main(String[] args) {
        SpringApplication.run(MongodbSpringApplication.class, args);
    }
}

// TODO implement exception handling
