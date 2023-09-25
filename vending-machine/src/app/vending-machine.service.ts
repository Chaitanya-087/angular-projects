import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MACHINE } from './mock-data';
import { Section } from './section';
import { Slot } from './slot';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {

  constructor() { }

  getMachine(): Observable<Section[]> {
    const machine = MACHINE;
    return of(machine);
  }

  getSection(id: number): Observable<Section | undefined> {
    const section = MACHINE.find(section => section.sid == id);
    return of(section);
  }

  updateSlot(slot: Slot): Observable<Section | undefined> { 
    const section = MACHINE.find(section => section.slots.find(s => s.id == slot.id));
    if (section) {
      const slotIndex = section.slots.findIndex(s => s.id == slot.id);
      section.slots[slotIndex] = slot;
    }
    return of(section);
  }
}
