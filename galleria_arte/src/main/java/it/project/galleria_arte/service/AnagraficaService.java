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
    public Anagrafica getAnagraficaById(Integer id){
        return  anagraficaDao.getAnagraficaById(id);
    }
    public void saveAnagrafica(Anagrafica anagrafica){
         anagraficaDao.saveAnagrafica(anagrafica);
    }
    public String getPasswordByEmail(String email){
        return anagraficaDao.getPasswordByEmail(email);
    }

    public List<String> getEmailList(){
        return anagraficaDao.getEmailList();
    }

    public Integer getUserIdByEmail(String email){
        return anagraficaDao.getUserIdByEmail(email);
    }

    public String getEmailById(Integer id){
        return anagraficaDao.getEmailById(id);
    }
}
