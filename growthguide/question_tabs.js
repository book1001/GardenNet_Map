function openNav(navName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) 
        
    document.getElementById(navName).style.display = "block";
  
    
    const footer = document.getElementById('footer');
    
    switch(navName) {
        case 'About':
            footer.style.background = 'linear-gradient(white, #be7333)';
            break;
        case 'Question1':
            footer.style.background = 'linear-gradient(white, #62A8E5)';
            break;
        case 'Question2':
            footer.style.background = 'linear-gradient(white, #FF48B0)';
            break;
        case 'Question3':
            footer.style.background = 'linear-gradient(white, #FEE700)';
            break;
        case 'Question4':
            footer.style.background = 'linear-gradient(white, #FF7477)';
            break;
        case 'Question5':
        footer.style.background = 'linear-gradient(white, #9D7AD2)';
        break;
        case 'Question6':
          footer.style.background = 'linear-gradient(white, #FEE700)';
          break;
      case 'Question7':
          footer.style.background = 'linear-gradient(white, #FF7477)';
          break;
      case 'Question8':
          footer.style.background = 'linear-gradient(white, #62A8E5)';
          break;
      case 'Question9':
          footer.style.background = 'linear-gradient(white, #FF48B0)';
          break;
      case 'Question10':
      footer.style.background = 'linear-gradient(white, #FEE700)';
      break;
      case 'Question11':
        footer.style.background = 'linear-gradient(white, #FF7477)';
        break;
    case 'Question12':
        footer.style.background = 'linear-gradient(white, #FF48B0)';
        break;
    case 'Question13':
        footer.style.background = 'linear-gradient(white, #9D7AD2)';
        break;
    case 'Question14':
        footer.style.background = 'linear-gradient(white, #62A8E5)';
        break;
    case 'Question15':
        footer.style.background = 'linear-gradient(white,#FEE700)';
        break;
        // Add cases for other tabs as needed
        default:
            footer.style.background = 'linear-gradient(white, #be7333)'; // Default background
            break;
    }

    
  }

   
