import { iEmployee } from "./../common/models";
import { eEmployeeState } from "./enums";
import { createStepperMachine } from "./utils";

const mockedEmployees: iEmployee[] = [
    {
        id: 1,
        email: "jaddlestone0@guardian.co.uk",
        name: "Jessamyn Addlestone",
        country: "GB",
        position: "Senior Frontend Engineer",
        state: eEmployeeState.ADDED,
        stateMachine: createStepperMachine(eEmployeeState.ADDED),
    },
    {
        id: 2,
        email: "ptace1@g.co",
        name: "Pete Tace",
        country: "HN",
        position: "Senior Backend Engineer",
        state: eEmployeeState.ACTIVE,
        stateMachine: createStepperMachine(eEmployeeState.ACTIVE),
    },
    {
        id: 3,
        email: "rgiampietro2@squarespace.com",
        name: "Rochella Giampietro",
        country: "PE",
        position: "Senior FullStack Engineer",
        state: eEmployeeState.APPROVED,
        stateMachine: createStepperMachine(eEmployeeState.APPROVED),
    },
    {
        id: 4,
        email: "jluberti3@blogtalkradio.com",
        name: "Janice Luberti",
        country: "UA",
        position: "Senior Devops Engineer",
        state: eEmployeeState.INACTIVE,
        stateMachine: createStepperMachine(eEmployeeState.INACTIVE),
    },
    {
        id: 5,
        email: "nstave4@intel.com",
        name: "Nicol Stave",
        country: "BR",
        position: "Senior QA Engineer",
        state: eEmployeeState.IN_CHECK,
        stateMachine: createStepperMachine(eEmployeeState.IN_CHECK),
    },
    {
        id: 6,
        email: "mpaulon5@deliciousdays.com",
        name: "Matt Paulon",
        country: "ES",
        position: "Tech Lead",
        state: eEmployeeState.APPROVED,
        stateMachine: createStepperMachine(eEmployeeState.APPROVED),
    },
    {
        id: 7,
        email: "ounworth6@nifty.com",
        name: "Odelia Unworth",
        country: "CZ",
        position: "EM",
        state: eEmployeeState.ADDED,
        stateMachine: createStepperMachine(eEmployeeState.ADDED),
    },
    {
        id: 8,
        email: "pperillio7@businessinsider.com",
        name: "Patin Perillio",
        country: "RU",
        position: "PM",
        state: eEmployeeState.ADDED,
        stateMachine: createStepperMachine(eEmployeeState.ADDED),
    },
];

export default mockedEmployees;
