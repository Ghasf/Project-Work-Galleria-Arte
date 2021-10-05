package it.project.galleria_arte.service;

import it.project.galleria_arte.dao.AnagraficaDao;
import it.project.galleria_arte.model.Anagrafica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AnagraficaService {

    @Autowired

    private AnagraficaDao anagraficaDao;

    public List<Anagrafica> getAnagrafica(){
        return anagraficaDao.getAnagrafica();
    }
}
