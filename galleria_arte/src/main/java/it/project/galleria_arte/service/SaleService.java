package it.project.galleria_arte.service;

import it.project.galleria_arte.dao.SaleDao;
import it.project.galleria_arte.model.Sale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SaleService {

    @Autowired
    private SaleDao saleDao;

    public List<Sale> getSale(){
        return saleDao.getSale();
    }

    public Sale getSalaByName(String nomeSala){
        return saleDao.getSalaByName(nomeSala);
    }
}
