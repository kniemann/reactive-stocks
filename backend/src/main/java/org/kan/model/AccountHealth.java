package org.kan.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class AccountHealth {
    private double gain;
    private double value;
    public void add(double addedGain, double addedValue) {
        this.gain = this.gain + addedGain;
        this.value = this.value + addedValue;
    }
}
