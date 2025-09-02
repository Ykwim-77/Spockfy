import { ChangeDetectionStrategy, Component, inject, input, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: 'app-botao-menu',
    standalone:true,
    imports: [],
    templateUrl: './botao-menu.component.html',
    styleUrl: './botao-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class botaoMenuComponent implements OnInit{

    nome = input.required<string>();
    ngOnInit(): void {
       

    }
}