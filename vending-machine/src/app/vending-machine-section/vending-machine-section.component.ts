import { Component, Input, TemplateRef } from '@angular/core';
import { Section } from '../section';
import { ActivatedRoute, Router } from '@angular/router';
import { VendingMachineService } from '../vending-machine.service';
import { Slot } from '../slot';

@Component({
  selector: 'app-vending-machine-section',
  templateUrl: './vending-machine-section.component.html',
  styleUrls: ['./vending-machine-section.component.css']
})
export class VendingMachineSectionComponent {
  section?: Section;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private vendingMachineService: VendingMachineService) { }
  products: Slot[] = [];
  
  ngOnInit(): void {
    this.getSection();
  }

  getSection(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.vendingMachineService.getSection(id).subscribe(section => this.section = section);
    })
  }

  take(slot: Slot, quantityRef: any) {
    const value = quantityRef.valueAsNumber;
    const maxValue = parseInt(quantityRef.max);
    if (value > maxValue || value <= 0) { return; }
    this.vendingMachineService.updateSlot({ ...slot, quantity: slot.quantity - value }).subscribe(section => {
      this.section = section;
      this.add(slot, quantityRef.valueAsNumber);
    });
    console.log(this.products);
  }

  add(product: Slot, quantity: number) {
    const item = this.products.find(item => item.id == product.id)
    if (item) {
      item.quantity += quantity;
      return;
    }
    this.products.push({ ...product, quantity });
  }

  putBack(product: Slot) {
    const item = this.products.find(item => item.id == product.id)
    if (item) {
      item.quantity -= 1;
      this.vendingMachineService.updateSlot({ ...product, quantity: product.quantity + 1 }).subscribe(section => {
        this.section = section;
      });
      if (item.quantity == 0) {
        this.products = this.products.filter(item => item.id != product.id);
      }
    }
    console.log(this.products); 
  }

  close() {
    localStorage.setItem('products', JSON.stringify(this.products));
    this.router.navigate(['/vending-machine']);
  }
}
