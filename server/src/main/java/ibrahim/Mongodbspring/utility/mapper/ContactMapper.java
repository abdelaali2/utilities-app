package ibrahim.Mongodbspring.utility.mapper;

import ibrahim.Mongodbspring.dto.ContactDto;
import ibrahim.Mongodbspring.entity.ContactEntity;
import org.springframework.stereotype.Service;

@Service
public class ContactMapper {
    public ContactDto toDtoMapper(ContactEntity entity) {
        return ContactDto.builder().name(entity.getName()).age(entity.getAge()).id(entity.get_id()).build();
    }

    public ContactEntity entityMapper(ContactDto dto) {
        return ContactEntity.builder().name(dto.getName()).age(dto.getAge()).build();
    }
}
