package ibrahim.Mongodbspring.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {
    private String _id;
    @NotEmpty(message = "Title Can't be empty")
    private String title;
    private Boolean isDone;
}
