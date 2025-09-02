import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { botaoMenuComponent } from "../botao-menu/botao-menu.component";

@Component({
    selector: 'app-painel-esquerdo',
    imports: [botaoMenuComponent],
    templateUrl: './painel-esquerdo.component.html',
    styleUrl: './painel-esquerdo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class painelEsquerdoComponent implements OnInit{
    ngOnInit(): void {
       

    }
}