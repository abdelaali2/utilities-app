package ibrahim.Mongodbspring.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document("todos")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TodoEntity {
    @Id
    private String _id;

    private Boolean isDone;

    private String title;

    private String description;
}
