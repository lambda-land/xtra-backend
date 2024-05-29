
$$
\text{State}(S,A)\simeq S \to A\times S\\
\text{Branch}(S,A)\simeq S \to \mathcal P (A\times S)\\
\text{Fork}(G,S,A)\simeq G\times S \to \mathcal P (A\times S) \times G^?
$$
State
$$
m_a \succ f = s_0 \mapsto m_b (s_1)\\
(a,s_1)=m_a (s_0),\quad  m_b =f(a)
$$
Branch
$$
m_a \succ f = s_0 \mapsto \text{interleave} \{ m_b(s_1)\ | \ (a,s_1) \in m_a(s_0), m_b = f(a)\}
$$
Fork
$$
m_a \succ f = s_0 \mapsto 
$$
