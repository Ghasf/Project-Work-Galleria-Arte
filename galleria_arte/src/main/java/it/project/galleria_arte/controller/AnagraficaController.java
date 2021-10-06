package it.project.galleria_arte.controller;

import it.project.galleria_arte.model.Anagrafica;
import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.service.AnagraficaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class AnagraficaController {

    @Autowired
    private AnagraficaService anagraficaService;

    @GetMapping("/get-anagrafica")//devo mettere un indirizzo con sintassi http
    public List<Anagrafica> getAnagrafica(){
        return anagraficaService.getAnagrafica();
    }

    @GetMapping("/get-anagrafica-by-id/{id}")
    public Anagrafica getAnagraficaById(@PathVariable("id") Integer id){
        return anagraficaService.getAnagraficaById(id);
    }
}

