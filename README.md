# xtra-backend
Backend API for creating Xtra traces


```
sudo apt install zlib1g-dev
```

------

GET http://localhost:8081/trace

ReqBody: raw / JSON

{
    "prog": "let fact = \\x -> case x of 0 -> 1; y -> y * fact (x - 1); in fact 5",
    "filter": "hide <let fact = _X in _Y => _Z>\nhide <fact _X => _Y> then children\nfactor binding\nfactor <_X - 1 => _Y> then all\nhide pattern\nhide (nonFirstTwo <fact _X => _Y>) except (afterLast <fact _X => _Y>)\nhide reflexive"

}

------