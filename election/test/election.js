var Election = artifacts.require("./Election.sol")
contract(
    "Election",
    function (accounts) {
        var electionInstance;
        it("Init with 2 candidates", function () {
            return Election.deployed().then(
                function (instance) {
                    return instance.candidatesCount();
                }
            ).then(
                function (count) {
                    assert.equal(count, 2);
                }
            )
        })

        it("candidates have correction values", function () {
            return Election.deployed().then(
                function (instance) {
                    electionInstance = instance;
                    return electionInstance.candidates(1);
                }
            ).then(
                function (candidate) {
                    assert.equal(candidate[0], 1, "id has to be 1");
                    assert.equal(candidate[1], "Candidate 1", "name has to be Candidate 1");
                    assert.equal(candidate[2], 0, "number of votes should be 0");
                    return electionInstance.candidates(2);
                }
            ).then(
                function (candidate) {
                    assert.equal(candidate[0], 2, "id has to be 2");
                    assert.equal(candidate[1], "Candidate 2", "name has to be Candidate 1");
                    assert.equal(candidate[2], 0, "number of votes should be 0");
                }
            )
        })
    }
)