package ibrahim.Mongodbspring.repository;

import ibrahim.Mongodbspring.entity.ContactEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public interface ContactRepo extends MongoRepository<ContactEntity, String> {
}
