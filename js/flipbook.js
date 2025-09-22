
function Flipbook(totalPages) {
    this.currentPage = 1;
    this.totalPages = totalPages;
    
    var self = this;
    
    // Navigation
    window.nextPage = function() {
        if (self.currentPage < self.totalPages) {
            self.currentPage++;
            self.updatePage();
        }
    };
    
    window.prevPage = function() {
        if (self.currentPage > 1) {
            self.currentPage--;
            self.updatePage();
        }
    };
    
    this.updatePage = function() {
        var pageFrame = document.getElementById('pageFrame');
        var pageInfo = document.getElementById('pageInfo');
        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');
        
        var pageNumber = this.currentPage.toString().padStart(3, '0');
        pageFrame.src = 'pages/page_' + pageNumber + '.html';
        pageInfo.textContent = 'Pagina ' + this.currentPage + ' di ' + this.totalPages;
        
        prevBtn.disabled = this.currentPage === 1;
        nextBtn.disabled = this.currentPage === this.totalPages;
    };
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            window.nextPage();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            window.prevPage();
        }
    });
}
