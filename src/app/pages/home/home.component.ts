import {  Component, OnDestroy, OnInit , ElementRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  characters: any[] = [];
  apiServiceSubscription!: Subscription;

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    this.getAll();
    console.log("passou aqui")
  }

  // pegando todos os personagens
  getAll(): void{
    this.apiServiceSubscription = this.apiService.getAllCharacters().subscribe((res)=> {
      this.characters = res.results;
      console.log(this.characters)
    })
  }

  ngOnDestroy(): void {
    this.apiServiceSubscription && this.apiServiceSubscription.unsubscribe()
  }
  // O objetivo principal é garantir que qualquer assinatura de Observable seja cancelada antes que o componente seja destruído.
  /*
  Se this.apiServiceSubscription for uma instância de Subscription (ou de uma classe que a implemente),
  o código verifica se ela existe (this.apiServiceSubscription && ...) antes de chamar unsubscribe().
   Isso é uma precaução para garantir que você não tente chamar unsubscribe() em uma referência nula,
   o que poderia resultar em um erro.
  */


}
