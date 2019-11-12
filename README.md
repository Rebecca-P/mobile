<h1>Jan Ken Pon!</h1>
<p>Our mobile project is a famous simple game: Rock Paper Scissors</p>
<img src="https://raw.githubusercontent.com/Rebecca-P/mobile/master/Background/example1.jpg" alt="alt text" style="max-width:10%;">

<h2>1</h2>
<p>choose what you will do.</p>
<p>If you choose nothing, you will randomly choose rock, paper or scissors</p>
<img src="https://raw.githubusercontent.com/Rebecca-P/mobile/master/Background/example2.jpg" alt="alt text" style="max-width:10%;">
<h2>2</h2>
<p>Wait</p>
<img src="https://raw.githubusercontent.com/Rebecca-P/mobile/master/Background/example3.jpg" alt="alt text" style="max-width:10%;">
<h2>3</h2>
<p>See your fight</p>
<img src="https://raw.githubusercontent.com/Rebecca-P/mobile/master/Background/example4.jpg" alt="alt text" style="max-width:10%;">

<h1>Implementation of Multiplayer Games</h1>
<p>Due to a lack of time, we didn't manage to finish the integration of multiplayer games. But the server can be found in the branch named 'Server_V0'. The server has been made by Agostino Rossi.
The server ensures the creation of public rooms you can join thanks to a Room_Id.
This id isn't generated automatically by mongoose, because of their complexity. Actually I don't want to write a 20 characters code to join a rock-paper-scissors game.
Once the 2 players joined, a match is created. The game is simulated thanks to some HTTP requests.</p>
<h2>Class Diagram</h2>
<p>Here is our class diagram:</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/f9bce94ffb26c264ca92aeacbeba5a36547517df/68747470733a2f2f696d6167652e6e6f656c736861636b2e636f6d2f66696368696572732f323031392f34362f312f313537333530373439362d756d6c2d6d6f62696c652e706e67"><img src="https://camo.githubusercontent.com/f9bce94ffb26c264ca92aeacbeba5a36547517df/68747470733a2f2f696d6167652e6e6f656c736861636b2e636f6d2f66696368696572732f323031392f34362f312f313537333530373439362d756d6c2d6d6f62696c652e706e67" alt="alt text" data-canonical-src="https://image.noelshack.com/fichiers/2019/46/1/1573507496-uml-mobile.png" style="max-width:100%;"></a></p>
</article>
  </div>


