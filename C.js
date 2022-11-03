#include <stdio.h>
#include <string.h>
#include <ctype.h>


// Determines if the substring contains the character
static int ifSubstringContainchar(char character, char *subString, int subStringLength, int *charCtr);

int main()
{
    char inputString[80];
    char subString[80];
    int inputLen;
    int index;
    int subStringLenght;
    int characterCtr[80];

    // Request input string from a user
    printf("Input a string : ");
    fgets(inputString, sizeof inputString, stdin);

    // Count total number of character from input string
    inputLen = strlen(inputString);

    characterCtr[0] = 1;
    subStringLenght = 0;

    // Loop through each character in the input string
    for (index = 1; index < inputLen; index++)
    {
        if (!isgraph(inputString[index])) continue;

        if (ifSubstringContainchar(inputString[index], subString, subStringLenght, characterCtr))
        {
            //Increase substring lenght
            subStringLenght++;

            // Copy the next character to the substring
            subString[subStringLenght] = inputString[index];

            // Set the counter of that character to 1
            characterCtr[subStringLenght] = 1;
        }
    }

    printf("Character count of each character :\n");

    // Print the total number of characters in the string
    for (index = 0; index <= subStringLenght; index++)
    {
        printf("%c\t%d\n", subString[index], characterCtr[index]);
    }

    return 0;
}

static int ifSubstringContainerChar(char character, char *subString, int subStringLenght, int *charCtr)
{
    int index;

    // Loop through each character in the substring
    for (index = 0; index <= subStringLenght; index++)
    {
        // If a character is found in the substring,
        // increase its counter and return.
        if (subString[index] == character)
        {
            charCtr[index]++;
            return 1;
        }
    }

    // The loop reached to the end of the substring
    // and did not find the character
    if (index > subStringLenght) return 0;
}
