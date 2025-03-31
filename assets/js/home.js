// mark as done
function markDone(checkbox){
    const listItem = checkbox.parentNode;
    if(checkbox.checked){
        listItem.classList.add('completed');
    }
    else listItem.classList.remove('completed');
}

// different colors for different categories

function addColorsToCategories(){
    const categories = document.querySelectorAll('.catsec');
    categories.forEach(category => {
        const categoryName = category.classList[1]; //to get the second class name
        switch(categoryName){
            case 'personal':
                category.style.backgroundColor = '#ffc0cb';
                break;
            
            case 'school':
                category.style.backgroundColor = '#add8e6';
                break;

            case 'work':
                category.style.backgroundColor = '#b0e57c';
                break;

            case 'cleaning':
                category.style.backgroundColor = '#f0e68c';
                break;

            default:
                category.style.backgroundColor = 'rgb(147, 133, 133)';
                break;
        }
    })
}

window.addEventListener('load', addColorsToCategories());