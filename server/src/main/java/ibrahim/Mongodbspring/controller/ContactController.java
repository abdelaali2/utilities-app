package ibrahim.Mongodbspring.controller;

import ibrahim.Mongodbspring.dto.ContactDto;
import ibrahim.Mongodbspring.service.ContactService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;


//Swagger Info
@Tag(name = "Contacts", description = "Contact Controller API Endpoints")
@RestController
@RequestMapping(value = "/contact")
@Slf4j
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllContacts() {
        try {
            List<ContactDto> contacts = contactService.getAllContacts();
            return new ResponseEntity<>(contacts, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getContactById(@PathVariable(name = "id") String id) {
        try {
            return new ResponseEntity<>(contactService.getContactById(id), HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }

    }

    @PostMapping("")
    public ResponseEntity<?> addNewContact(@Valid @RequestBody ContactDto contact) {
        try {
            contactService.addContact(contact);
            Objects.isNull(contact);
            return ResponseEntity.status(HttpStatus.OK).body("Contact Added");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteContactById(@RequestParam(name = "id") String id) {
        try {
            return new ResponseEntity<>(contactService.deleteContactById(id), HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}

//TODO: Create contact update feature.
