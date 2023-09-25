import { Component } from '@angular/core';
import { VendingMachineService } from '../vending-machine.service';
import { Section } from '../section';
import { Router } from '@angular/router';
import { Slot } from '../slot';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {
  machine!: Section[];
  products: Slot[] = [];
  constructor(private vendingMachineService: VendingMachineService, private router: Router) {}

  ngOnInit(): void {
    this.getMachine();
    this.products = JSON.parse(localStorage.getItem('products') as string);;
  }

  getMachine(): void {
    this.vendingMachineService.getMachine()
      .subscribe(machine => this.machine = machine);
  }

  open(productId: number): void {
      const section = this.machine.find(section => section.slots.find(slot => slot.id === productId));
      this.router.navigate(['/vending-machine/section', section?.sid]);
  }

  getTotalPrice(): number {
    return this.products.reduce((acc: number,item: Slot) => acc + item.price * item.quantity, 0)
  }

  pay(): void{
    this.products = [];
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}

