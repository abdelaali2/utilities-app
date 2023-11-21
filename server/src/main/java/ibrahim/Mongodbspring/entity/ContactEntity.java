package ibrahim.Mongodbspring.entity;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("contacts")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactEntity {
    @Id
    private String _id;

    private String name;

    private Integer age;

    private Date creationDate = new Date();
}

//TODO: add more fields to the schema.
