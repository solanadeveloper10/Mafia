document.getElementById('copy-button').addEventListener('click', function () {
    const contractText = document.getElementById('contract-text').textContent;
    navigator.clipboard.writeText(contractText).then(() => {
      alert('Contract copied to clipboard!');
    }).catch(err => {
      console.error('Error copying contract: ', err);
    });
  });