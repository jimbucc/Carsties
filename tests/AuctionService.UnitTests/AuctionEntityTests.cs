using AuctionService.Entities;

namespace AuctionService.UnitTests;

public class UnitTest1
{
    [Fact]
    public void HasReservedPrice_ReservedPriceGtZero_True()
    {
        // arrange 
        var auction = new Auction {
            Id = Guid.NewGuid(),
            ReservedPrice = 10
        };

        // act
        var result = auction.HasReservedPrice();

        // assert
        Assert.True(result);
    }

    [Fact]
    public void HasReservedPrice_ReservedPriceIsZero_True()
    {
        // arrange 
        var auction = new Auction {
            Id = Guid.NewGuid(),
            ReservedPrice = 0
        };

        // act
        var result = auction.HasReservedPrice();

        // assert
        Assert.False(result);
    }
}