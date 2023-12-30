import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentPage = 2;
  images = [
    {
      title: 'At the temple',
      url: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcGxlfGVufDB8fDB8fHww'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww'
    },
    {
      title: 'At the library',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the temple',
      url: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcGxlfGVufDB8fDB8fHww'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww'
    },
    {
      title: 'At the library',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the temple',
      url: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcGxlfGVufDB8fDB8fHww'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww'
    },
    {
      title: 'At the library',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the temple',
      url: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcGxlfGVufDB8fDB8fHww'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww'
    },
    {
      title: 'At the library',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the temple',
      url: 'https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcGxlfGVufDB8fDB8fHww'
    },
    {
      title: 'At the forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww'
    },
    {
      title: 'At the library',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  checkWindowIndex(index : number) {
    console.log( 'currPage: ',this.currentPage, " index: ", index);
    return Math.abs(this.currentPage - index) < 3 ;
  }
}

