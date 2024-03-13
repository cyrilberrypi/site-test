const metricValues = {
    followers: 400000,
    likes: 289100,
    comments: 93200,
  };
  
  const communityGrowth = {
    followers: 0.8,
    likes: 121,
    comments: 2.7,
  };
  
  const supportDemographics = {
    male: 80,
    female: 20,
  };
  
  function createChart(element, value, label) {
    const ctx = element.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [label],
        datasets: [{
          label: label,
          data: [value, 100 - value],
          backgroundColor: [
            'hsl(240, 100%, 50%)',
            'hsl(0, 0%, 90%)',
          ],
          borderColor: [
            'hsl(240, 100%, 50%)',
            'hsl(0, 0%, 90%)',
          ],
          borderWidth: 1,
        }]
      },
      options: {
        rotation: -Math.PI * 1.5,
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
  
  const followerMetric = document.getElementById('followerMetric');
  const likeMetric = document.getElementById('likeMetric');
  const commentMetric = document.getElementById('commentMetric');
  
  createChart(followerMetric, metricValues.followers, 'Followers');
  createChart(likeMetric, metricValues.likes, 'Likes');
  createChart(commentMetric, metricValues.comments, 'Comments');
  
  const followerGrowth = document.getElementById('followerGrowth');
  const likeGrowth = document.getElementById('likeGrowth');
  const commentGrowth = document.getElementById('commentGrowth');
  
  followerGrowth.textContent = `↑${communityGrowth.followers}%`;
  likeGrowth.textContent = `↑${communityGrowth.likes}%`;
  commentGrowth.textContent = `↑${communityGrowth.comments}%`;
  
  const malePercentage = document.querySelector('.support__demographic__slice--male');
  const femalePercentage = document.querySelector('.support__demographic__slice--female');
  
  malePercentage.style.width = `${supportDemographics.male}%`;
  femalePercentage.style.width = `${supportDemographics.female}%`;
  