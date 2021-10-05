package it.project.galleria_arte.service;

import it.project.galleria_arte.dao.PrenotazioniDao;
import it.project.galleria_arte.model.Prenotazioni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PrenotazioniService {

    @Autowired

    private PrenotazioniDao prenotazioniDao;

    public List<Prenotazioni> getPrenotazioni(){
        return prenotazioniDao.getPrenotazioni();
    }
}
