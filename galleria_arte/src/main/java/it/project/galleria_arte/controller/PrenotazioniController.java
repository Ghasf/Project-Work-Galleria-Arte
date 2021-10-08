package it.project.galleria_arte.controller;

import com.sun.istack.NotNull;
import it.project.galleria_arte.model.Prenotazioni;
import it.project.galleria_arte.service.PrenotazioniService;
import org.hibernate.annotations.Target;
import org.springframework.aop.TargetSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping
public class PrenotazioniController {

    @Autowired
    private PrenotazioniService prenotazioniService;

    @GetMapping("/get-prenotazioni")
    public List<Prenotazioni> getPrenotazioni(){
        return prenotazioniService.getPrenotazioni();
    }

    @GetMapping("/get-prenotazione-by-id/{id}")
    public Prenotazioni getPrenotazioneById(@PathVariable("id") Integer id){
        return prenotazioniService.getPrenotazioneById(id);
    }

    @GetMapping("/get-prenotazioni-by-id-utente/{id}")
    public List<Prenotazioni> getPrenotazioniByIdUtente(@PathVariable("id") Integer id){
        return prenotazioniService.getPrenotazioniByIdUtente(id);
    }

    @GetMapping("/get-date-inizio-by-id-sala/{id}")
    public List<LocalDate> getDateInizioByIdSala(@PathVariable("id") Integer id){
        return prenotazioniService.getDateInizioByIdSala(id);
    }

    @GetMapping("/get-date-fine-by-id-sala/{id}")
    public List<LocalDate> getDateFineByIdSala(@PathVariable("id") Integer id){
        return prenotazioniService.getDateFineByIdSala(id);
    }

    @PostMapping("/save-prenotazione")
    public void savePrenotazione(@RequestBody @NotNull Prenotazioni prenotazione){
        prenotazioniService.savePrenotazione(prenotazione);
    }

    @GetMapping("/get-data-inizio-by-id/{id}")
    public LocalDate getDataInizioById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataInizioById(id);
    }

    @GetMapping("/get-data-fine-by-id/{id}")
    public LocalDate getDataFineById(@PathVariable("id") Integer id){
        return prenotazioniService.getDataFineById(id);
    }

    @DeleteMapping("/delete-prenotazione-by-id/{id}")
    public void deletePrenotazioneById(@PathVariable("id") Integer id){
        prenotazioniService.deletePrenotazioneById(id);
    }
}
