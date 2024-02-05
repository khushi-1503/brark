const writename = "Khushpreet Kaur";
const heading = document.createElement("h1");

heading.textContent = writename;
heading.style.textAlign = "center";
heading.style.color = "rgb(224, 10, 168)";

document.body.appendChild(heading);
const body = document.body;

const input1 = createInputElement("number", "input1");
const input2 = createInputElement("number", "input2");
const button = createButtonElement("Sum");

button.addEventListener("click", calculateSum);
body.appendChild(input1);
body.appendChild(input2);
body.appendChild(button);

const displaySum = createParagraphElement("");
body.appendChild(displaySum);

function calculateSum() 
{
    const number1 = parseFloat(input1.value) || 0;
    const number2 = parseFloat(input2.value) || 0;
    const total = number1 + number2;
    displaySum.textContent = `Sum: ${total}`;
}

const validateInput = () => 
{
    try 
    {
        validateNumber(input1.value);
        validateNumber(input2.value);
    } 
    catch (error) 
    {
        showError(error);
    }
};

const validateNumber = (value) => 
{
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) 
    {
        throw "Put the the number!";
    }
    return parsedValue;
};

const showError = (errorMessage) => 
{
    const errorMsg = createParagraphElement(errorMessage);
    errorMsg.style.color = "red";
    body.appendChild(errorMsg);

    input1.style.border = "10px solid red";
    input2.style.border = "10px solid red";
};
button.addEventListener("click", validateInput);

function createInputElement(type, id) 
{
    const inputElement = document.createElement("input");
    inputElement.type = type;
    inputElement.id = id;
    return inputElement;
}

function createButtonElement(textContent)
{
    const buttonElement = document.createElement("button");
    buttonElement.textContent = textContent;
    return buttonElement;
}

function createParagraphElement(textContent)
{
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = textContent;
    return paragraphElement;
}
function appendElementToBody(element) 
{
    body.appendChild(element);
}

function appendElementsToBody(elements) 
{
    elements.forEach((element) => appendElementToBody(element));
}

function applyErrorStyle(elements) 
{
    elements.forEach((element) => 
    {
        element.style.border = "5px solid red";
    });
}