package it.project.galleria_arte.controller;

import com.sun.istack.NotNull;
import it.project.galleria_arte.model.Anagrafica;
import it.project.galleria_arte.service.AnagraficaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping
public class AnagraficaController {

    @Autowired
    private AnagraficaService anagraficaService;

    @GetMapping("/get-anagrafica")
    public List<Anagrafica> getAnagrafica(){
        return anagraficaService.getAnagrafica();
    }

    @GetMapping("/get-anagrafica-by-id/{id}")
    public Anagrafica getAnagraficaById(@PathVariable("id") Integer id){
        return anagraficaService.getAnagraficaById(id);
    }

    @GetMapping("get-password-by-email/{email}")
    public String getPasswordByEmail(@PathVariable("email")String email){
        return anagraficaService.getPasswordByEmail(email);
    }

    @PostMapping("/save-anagrafica")
    public void saveAnagrafica(@RequestBody @NotNull Anagrafica anagrafica){
        anagraficaService.saveAnagrafica(anagrafica);
    }

    @GetMapping("/get-email-list")
    public List<String> getEmailList(){
        return anagraficaService.getEmailList();
    }
}

