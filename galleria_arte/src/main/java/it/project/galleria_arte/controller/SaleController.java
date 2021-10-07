package it.project.galleria_arte.controller;

import it.project.galleria_arte.model.Sale;
import it.project.galleria_arte.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping
public class SaleController {

    @Autowired
    private SaleService saleService;

    @GetMapping("/get-sale")//devo mettere un indirizzo con sintassi http
    public List<Sale> getSale(){
        return saleService.getSale();
    }

    @GetMapping("/get-sala-id-by-name/{nomeSala}")
    public Integer getSalaIdByName(@PathVariable("nomeSala") String nomeSala){
        return saleService.getSalaByName(nomeSala).getIdsala();
    }

}
