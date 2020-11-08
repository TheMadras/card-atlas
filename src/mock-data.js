let mock = [
    {
        "id": 1,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Flights",
        "spending_type": "Gas"
    },
    {
        "id": 2,
        "card_company": "visa",
        "spending_requirement": "Medium",
        "reward_type": "Flights",
        "spending_type": "Amazon"
    },
    {
        "id": 3,
        "card_company": "mastercard",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Restaurant"
    },
    {
        "id": 4,
        "card_company": "visa",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Education"
    },
    {
        "id": 5,
        "card_company": "switch",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Amazon"
    },
    {
        "id": 6,
        "card_company": "visa-electron",
        "spending_requirement": "High",
        "reward_type": "Cash",
        "spending_type": "Restaurant"
    },
    {
        "id": 7,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Education"
    },
    {
        "id": 8,
        "card_company": "instapayment",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 9,
        "card_company": "maestro",
        "spending_requirement": "High",
        "reward_type": "Hotels",
        "spending_type": "Education"
    },
    {
        "id": 10,
        "card_company": "mastercard",
        "spending_requirement": "High",
        "reward_type": "Discounts",
        "spending_type": "Travel"
    },
    {
        "id": 11,
        "card_company": "switch",
        "spending_requirement": "High",
        "reward_type": "Discounts",
        "spending_type": "Grocery"
    },
    {
        "id": 12,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Education"
    },
    {
        "id": 13,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Restaurant"
    },
    {
        "id": 14,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Gas",
        "spending_type": "Grocery"
    },
    {
        "id": 15,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Gas",
        "spending_type": "Grocery"
    },
    {
        "id": 16,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Restaurant"
    },
    {
        "id": 17,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Travel"
    },
    {
        "id": 18,
        "card_company": "bankcard",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Travel"
    },
    {
        "id": 19,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Cash",
        "spending_type": "Restaurant"
    },
    {
        "id": 20,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Grocery"
    },
    {
        "id": 21,
        "card_company": "mastercard",
        "spending_requirement": "High",
        "reward_type": "Food",
        "spending_type": "Education"
    },
    {
        "id": 22,
        "card_company": "bankcard",
        "spending_requirement": "High",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 23,
        "card_company": "china-unionpay",
        "spending_requirement": "Medium",
        "reward_type": "Food",
        "spending_type": "Education"
    },
    {
        "id": 24,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Food",
        "spending_type": "Gas"
    },
    {
        "id": 25,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Restaurant"
    },
    {
        "id": 26,
        "card_company": "instapayment",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Amazon"
    },
    {
        "id": 27,
        "card_company": "laser",
        "spending_requirement": "High",
        "reward_type": "Flights",
        "spending_type": "Amazon"
    },
    {
        "id": 28,
        "card_company": "diners-club-enroute",
        "spending_requirement": "High",
        "reward_type": "Cash",
        "spending_type": "Restaurant"
    },
    {
        "id": 29,
        "card_company": "maestro",
        "spending_requirement": "High",
        "reward_type": "Hotels",
        "spending_type": "Travel"
    },
    {
        "id": 30,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Food",
        "spending_type": "Restaurant"
    },
    {
        "id": 31,
        "card_company": "visa-electron",
        "spending_requirement": "Medium",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 32,
        "card_company": "switch",
        "spending_requirement": "Medium",
        "reward_type": "Food",
        "spending_type": "Gas"
    },
    {
        "id": 33,
        "card_company": "maestro",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Restaurant"
    },
    {
        "id": 34,
        "card_company": "maestro",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 35,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Gas"
    },
    {
        "id": 36,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Food",
        "spending_type": "Travel"
    },
    {
        "id": 37,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Gas",
        "spending_type": "Travel"
    },
    {
        "id": 38,
        "card_company": "china-unionpay",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Gas"
    },
    {
        "id": 39,
        "card_company": "bankcard",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Grocery"
    },
    {
        "id": 40,
        "card_company": "china-unionpay",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 41,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Education"
    },
    {
        "id": 42,
        "card_company": "bankcard",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 43,
        "card_company": "mastercard",
        "spending_requirement": "High",
        "reward_type": "Gas",
        "spending_type": "Amazon"
    },
    {
        "id": 44,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Flights",
        "spending_type": "Restaurant"
    },
    {
        "id": 45,
        "card_company": "americanexpress",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Gas"
    },
    {
        "id": 46,
        "card_company": "bankcard",
        "spending_requirement": "High",
        "reward_type": "Food",
        "spending_type": "Education"
    },
    {
        "id": 47,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Gas",
        "spending_type": "Education"
    },
    {
        "id": 48,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Travel"
    },
    {
        "id": 49,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Food",
        "spending_type": "Grocery"
    },
    {
        "id": 50,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Amazon"
    },
    {
        "id": 51,
        "card_company": "americanexpress",
        "spending_requirement": "Medium",
        "reward_type": "Cash",
        "spending_type": "Education"
    },
    {
        "id": 52,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Food",
        "spending_type": "Restaurant"
    },
    {
        "id": 53,
        "card_company": "bankcard",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Grocery"
    },
    {
        "id": 54,
        "card_company": "diners-club-carte-blanche",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Grocery"
    },
    {
        "id": 55,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Amazon"
    },
    {
        "id": 56,
        "card_company": "bankcard",
        "spending_requirement": "High",
        "reward_type": "Cash",
        "spending_type": "Education"
    },
    {
        "id": 57,
        "card_company": "laser",
        "spending_requirement": "High",
        "reward_type": "Gas",
        "spending_type": "Travel"
    },
    {
        "id": 58,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Education"
    },
    {
        "id": 59,
        "card_company": "bankcard",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Education"
    },
    {
        "id": 60,
        "card_company": "laser",
        "spending_requirement": "High",
        "reward_type": "Gas",
        "spending_type": "Education"
    },
    {
        "id": 61,
        "card_company": "mastercard",
        "spending_requirement": "Low",
        "reward_type": "Gas",
        "spending_type": "Restaurant"
    },
    {
        "id": 62,
        "card_company": "visa",
        "spending_requirement": "Low",
        "reward_type": "Hotels",
        "spending_type": "Education"
    },
    {
        "id": 63,
        "card_company": "americanexpress",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Grocery"
    },
    {
        "id": 64,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Gas"
    },
    {
        "id": 65,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Travel"
    },
    {
        "id": 66,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Discounts",
        "spending_type": "Amazon"
    },
    {
        "id": 67,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Amazon"
    },
    {
        "id": 68,
        "card_company": "switch",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Grocery"
    },
    {
        "id": 69,
        "card_company": "mastercard",
        "spending_requirement": "Medium",
        "reward_type": "Discounts",
        "spending_type": "Travel"
    },
    {
        "id": 70,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Restaurant"
    },
    {
        "id": 71,
        "card_company": "visa",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Travel"
    },
    {
        "id": 72,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Restaurant"
    },
    {
        "id": 73,
        "card_company": "jcb",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Gas"
    },
    {
        "id": 74,
        "card_company": "bankcard",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Amazon"
    },
    {
        "id": 75,
        "card_company": "mastercard",
        "spending_requirement": "Medium",
        "reward_type": "Cash",
        "spending_type": "Travel"
    },
    {
        "id": 76,
        "card_company": "china-unionpay",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Gas"
    },
    {
        "id": 77,
        "card_company": "americanexpress",
        "spending_requirement": "Medium",
        "reward_type": "Flights",
        "spending_type": "Amazon"
    },
    {
        "id": 78,
        "card_company": "diners-club-carte-blanche",
        "spending_requirement": "Medium",
        "reward_type": "Cash",
        "spending_type": "Restaurant"
    },
    {
        "id": 79,
        "card_company": "diners-club-enroute",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Travel"
    },
    {
        "id": 80,
        "card_company": "china-unionpay",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Grocery"
    },
    {
        "id": 81,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Food",
        "spending_type": "Travel"
    },
    {
        "id": 82,
        "card_company": "china-unionpay",
        "spending_requirement": "High",
        "reward_type": "Discounts",
        "spending_type": "Gas"
    },
    {
        "id": 83,
        "card_company": "bankcard",
        "spending_requirement": "Medium",
        "reward_type": "Discounts",
        "spending_type": "Travel"
    },
    {
        "id": 84,
        "card_company": "maestro",
        "spending_requirement": "Low",
        "reward_type": "Food",
        "spending_type": "Grocery"
    },
    {
        "id": 85,
        "card_company": "switch",
        "spending_requirement": "High",
        "reward_type": "Flights",
        "spending_type": "Gas"
    },
    {
        "id": 86,
        "card_company": "diners-club-carte-blanche",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Restaurant"
    },
    {
        "id": 87,
        "card_company": "jcb",
        "spending_requirement": "Medium",
        "reward_type": "Hotels",
        "spending_type": "Grocery"
    },
    {
        "id": 88,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Gas",
        "spending_type": "Restaurant"
    },
    {
        "id": 89,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Hotels",
        "spending_type": "Travel"
    },
    {
        "id": 90,
        "card_company": "maestro",
        "spending_requirement": "Low",
        "reward_type": "Discounts",
        "spending_type": "Amazon"
    },
    {
        "id": 91,
        "card_company": "laser",
        "spending_requirement": "Low",
        "reward_type": "Flights",
        "spending_type": "Travel"
    },
    {
        "id": 92,
        "card_company": "laser",
        "spending_requirement": "Medium",
        "reward_type": "Gas",
        "spending_type": "Travel"
    },
    {
        "id": 93,
        "card_company": "diners-club-enroute",
        "spending_requirement": "Medium",
        "reward_type": "Discounts",
        "spending_type": "Gas"
    },
    {
        "id": 94,
        "card_company": "laser",
        "spending_requirement": "High",
        "reward_type": "Flights",
        "spending_type": "Restaurant"
    },
    {
        "id": 95,
        "card_company": "diners-club-enroute",
        "spending_requirement": "Low",
        "reward_type": "Hotels",
        "spending_type": "Amazon"
    },
    {
        "id": 96,
        "card_company": "diners-club-carte-blanche",
        "spending_requirement": "Medium",
        "reward_type": "Flights",
        "spending_type": "Education"
    },
    {
        "id": 97,
        "card_company": "laser",
        "spending_requirement": "Medium",
        "reward_type": "Discounts",
        "spending_type": "Travel"
    },
    {
        "id": 98,
        "card_company": "visa",
        "spending_requirement": "Low",
        "reward_type": "Gas",
        "spending_type": "Gas"
    },
    {
        "id": 99,
        "card_company": "jcb",
        "spending_requirement": "High",
        "reward_type": "Hotels",
        "spending_type": "Amazon"
    },
    {
        "id": 100,
        "card_company": "americanexpress",
        "spending_requirement": "Low",
        "reward_type": "Cash",
        "spending_type": "Amazon"
    }
]

export default mock;