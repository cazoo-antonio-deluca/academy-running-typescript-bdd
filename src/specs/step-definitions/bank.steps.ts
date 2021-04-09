import {defineFeature, loadFeature} from "jest-cucumber";

const feature = loadFeature('./src/specs/features/bank.feature')

defineFeature(feature, test => {
    test("Client prints statement", () => {

    })
})