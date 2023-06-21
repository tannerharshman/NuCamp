import random

die1 = str((random.randint(1, 6)))

die2 = str((random.randint(1, 6)))

high_score = str(0)

total = die1 + die2


def dice_game():
    print(f"Current High Score: {high_score}")
    print("1) Roll Dice")
    print("2) Leave Game")


def roll_dice():
    print("You roll a..." + die1)
    print("You roll a..." + die2)
    print("You have rolled a total of: ")
    print(total)


while True:
    print(roll_dice())

    choice = input("Enter your choice: ")

    if choice == "1":
        print(roll_dice())

    if high_score <= total:
        print("New High Score! \nCurrent High Score: ")
        print(total)
        break

    elif high_score >= total:
        print(high_score)
        break

    else:
        break
