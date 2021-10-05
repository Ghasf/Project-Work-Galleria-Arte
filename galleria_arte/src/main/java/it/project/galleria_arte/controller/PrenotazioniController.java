package it.project.galleria_arte.controller;

import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.service.PrenotazioniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping
public class PrenotazioniController {

    @Autowired
    private PrenotazioniService prenotazioniService;

    @GetMapping("/get-prenotazioni")//devo mettere un indirizzo con sintassi http
    public List<Prenotazioni> getPrenotazioni(){
        return prenotazioniService.getPrenotazioni();
    }

    @GetMapping("/get-data-inizio/{id}")
    public Date getDataInizioById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataInizioById(id);
    }
}
