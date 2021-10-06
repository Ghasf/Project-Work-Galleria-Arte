package it.project.galleria_arte.controller;

import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.service.PrenotazioniService;
import org.hibernate.annotations.Target;
import org.springframework.aop.TargetSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/get-prenotazione-by-id/{id}")
    public Prenotazioni getPrenotazioneById(@PathVariable("id") Integer id){
        return prenotazioniService.getPrenotazioneById(id);
    }

    @GetMapping("/get-data-inizio-by-id/{id}")
    public Date getDataInizioById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataInizioById(id);
    }

    @GetMapping("/get-data-fine-by-id/{id}")
    public Date getDataFineById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataFineById(id);
    }

    @DeleteMapping("/delete-prenotazione-by-id/{id}")
    public void deletePrenotazioneById(@PathVariable("id") Integer id){
        prenotazioniService.deletePrenotazioneById(id);
    }
}
