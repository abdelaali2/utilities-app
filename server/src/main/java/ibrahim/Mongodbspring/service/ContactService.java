package ibrahim.Mongodbspring.service;

import ibrahim.Mongodbspring.utility.mapper.ContactMapper;
import ibrahim.Mongodbspring.dto.ContactDto;
import ibrahim.Mongodbspring.entity.ContactEntity;
import ibrahim.Mongodbspring.repository.ContactRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ContactService {

    @Autowired
    private ContactRepo repo;
    @Autowired
    private ContactMapper mapper;

    public ContactDto getContactById(String id) {
        log.info("Getting Contact by id: " + id);
        ContactEntity entity = repo.findById(id).orElse(new ContactEntity());
        return mapper.toDtoMapper(entity);
    }

    public List<ContactDto> getAllContacts() {
        log.info("Getting all contacts.");
        List<ContactEntity> contactEntities = repo.findAll();
        return contactEntities.stream().map(mapper::toDtoMapper).collect(Collectors.toList());
    }

    public ContactDto addContact(ContactDto contact) {
        log.info("Adding new Contact");
        contact.setId(UUID.randomUUID().toString());
        return mapper.toDtoMapper(repo.save(mapper.entityMapper(contact)));
    }

    public String deleteContactById(String id) {
        log.info("Deleting Contact by id: " + id);
        repo.deleteById(id);
        return "Contact deleted";
    }
}
