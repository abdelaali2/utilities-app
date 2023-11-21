package ibrahim.Mongodbspring.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactDto {
    private String id;
    @NotEmpty(message = "Name can't be empty")
    private String name;
    @NotNull(message = "Age can't be empty")
    private Integer age;
}
